interface ISchemeObject {
  [key: string]: string;
}

const domain = 'http://localhost:3000';

export const endPoints: ISchemeObject = {
  getContacts: `${domain}/contacts`,
  addContact: `${domain}/contacts`
};
