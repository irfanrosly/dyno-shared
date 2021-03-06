export const settings = {
  subHeader: { label: 'My Settings' },
  personal: {
    label: 'Personal',
    personalInfo: 'Personal Info',
    theme: 'Theme',
    displayName: 'Display Name',
    name: 'Name',
    language: 'Language',
  },
  security: {
    label: 'Security',
    changePassword: {
      password: 'Password',
      label: 'Change Password',
      currentPassword: 'Current Password*',
      newPassword: 'New Password*',
      confirmNewPassword: 'Confirm New Password*',
      enterNewPassword: 'Enter New Password',
      enterCurrentPassword: 'Enter Current Password',
      description: "Use at least 8 characters. Don't use a password from another site, or something too obvious like your pet's name.",
      newPasswordCriteria: {
        title: 'Your new password must: ',
        length: 'The password must be at least 8 characters long (maximum 20)',
        uppercase: 'Must contain at least 1 upper case letter',
        lowercase: 'Must contain at least 1 lower case letter',
        number: 'Must contain at least 1 number',
        space: 'Must NOT contain space',
        userId: 'Must not be the same as your Maybank2u user ID',
        previousPassword: 'Must NOT be the same as your previous 5 passwords',
        characters: 'Must NOT contain characters [\\"<>\'%;&+]',
      },
    },
    securityImage: {
      label: 'Security Image',
      description: 'Change your security image',
      loadMoreImages: 'Click for more picture',
      guidlines: 'Please choose an image below. Upon submission, the chosen image will be used for your own identity verification',
    },
  },
  theme: { title: 'Select your preferable theme for M2U Web' },
  message: {
    themeChanged: 'Your theme has been updated',
    infoChanged: 'Your Data has been updated successfully',
    passwordChanged: 'Your password has been updated',
    securityImageChanged: 'Your security image has been updated',
  },
  errorMessage: {
    confirmationNotMatch: 'Password confirmation not match',
    displayNameInvalid: 'Display name need to be between 1 to 64 alphanumeric space',
  },
};
