export const updateProfile = (firstname: string, lastname: string) => {
    cy.getByTestId('EditableProfileCardHeader.EditButton').click();
    cy.getByTestId('ProfileCard.firstname').clear().type(firstname);
    cy.getByTestId('ProfileCard.lastname').clear().type(lastname);
    cy.getByTestId('EditableProfileCardHeader.SaveButton').click();
};

export const resetProfile = (profileId: string) => {
    return cy.request({
        method: 'PUT',
        url: `http://localhost:8000/profile/${profileId}`,
        headers: { Authorization: 'asasf' },
        body: {
            id: '4',
            first: 'test',
            lastname: 'user',
            age: 465,
            currency: 'EUR',
            country: 'Belarus',
            city: 'Moscow',
            username: 'testuser',
            avatar: 'https://www.osp.ru/FileStorage/DOCUMENTS_ILLUSTRATIONS/13237083/original.jpg',
        },
    });
};

declare global {
    namespace Cypress {
        interface Chainable {
            updateProfile(firstname: string, lastname: string): Chainable<void>;
            resetProfile(profileId: string): Chainable<void>;
        }
    }
}
