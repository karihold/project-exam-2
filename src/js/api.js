const baseApi = 'https://us-central1-noroff-final-exam.cloudfunctions.net/api/v1';

export const establishments = `${baseApi}/establishments`;
export const enquiries = `${baseApi}/enquiries`;
export const contacts = `${baseApi}/contacts`;
export const headers = new Headers({ key: process.env.API_KEY, 'Content-Type': 'application/json' });
