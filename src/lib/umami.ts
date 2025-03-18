import umami from '@umami/node';

umami.init({
    websiteId: '28b7a145-25d2-42c7-99d5-730e72c9a414', // Your website id
    hostUrl: 'https://cloud.umami.is', // URL to your Umami instance
});

export const umamiTrackCheckoutSuccessEvent = async (payload: {
    [key: string]: string | number | Date
}) => {
    await umami.track('checkout_success', payload);
}