import { Meteor } from 'meteor/meteor';
import { HTTP } from 'meteor/http';
import cloudinary from 'cloudinary';

cloudinary.config({
  cloud_name: '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',
  api_key: 'AIzaSyAhjUj42pjiQrYx901CaaCvXzEzD6CvCoo',
  api_secret: 'AIzaSyAhjUj42pjiQrYx901CaaCvXzEzD6CvCoo',
});

Meteor.methods({
  // eslint-disable-next-line meteor/audit-argument-checks
  async generateImage(prompt) {
    try {
      const response = await HTTP.call('POST', 'https://api.openai.com/v1/images/generations', {
        headers: {
          'Content-Type': 'application/json',
          // Authorization: `Bearer ${'YOUR-KEY-HERE'}`,
          Authorization: `Bearer ${'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'}`,
        },
        data: {
          model: 'dall-e-3',
          prompt: prompt,
          n: 1,
          size: '1024x1024',
        },
      });

      const imageUrl = response.data.data[0].url;
      return imageUrl;
    } catch (error) {
      console.error('Error calling OpenAI:', error);
      throw new Meteor.Error('api-call-failed', `Failed to call OpenAI API: ${error.message}`);
    }
  },

  // eslint-disable-next-line meteor/audit-argument-checks
  async uploadImage(imageData) {
    this.unblock();

    try {
      const result = await cloudinary.v2.uploader.upload(imageData, { resource_type: 'auto' });
      return result.secure_url;
    } catch (error) {
      console.error('Error uploading to Cloudinary:', error);
      throw new Meteor.Error('cloudinary-upload-failed', 'Error uploading to Cloudinary');
    }
  },

  // eslint-disable-next-line meteor/audit-argument-checks
  async textCheck(text) {
    try {
      const response = await HTTP.call('POST', 'https://api.openai.com/v1/moderations', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${'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'}`,
        },
        data: {
          input: text,
          model: 'text-moderation-latest',
        },
      });

      const moderationResult = response.data.results[0];
      if (moderationResult.flagged) {
        throw new Meteor.Error('text-not-allowed', 'Text violates content policy');
      }
      return true;
    } catch (error) {
      console.error('Error calling OpenAI Moderation API:', error);
      throw new Meteor.Error('moderation-api-call-failed', `Failed to call OpenAI Moderation API: ${error.message}`);
    }
  },
});
