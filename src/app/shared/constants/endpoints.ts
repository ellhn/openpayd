interface ISchemeObject {
  [key: string]: string;
}

const domain = 'http://localhost:3000';

export const endPoints: ISchemeObject = {
  getContacts: `${domain}/contacts`,
  getAddresses: `${domain}/contacts`,
  getAllAddresses: `${domain}/addresses`,
  addContact: `${domain}/contacts`,
  addAddress: `${domain}/contacts`,
  updateAddress: `${domain}/addresses`,
  deleteAddress: `${domain}/addresses`
};
