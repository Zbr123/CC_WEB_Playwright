class LoginPage {
  formcheckbox= '#choice_5_23_1';
  usernameInput = `input[name='email']`;   // Locator for username input field
  passwordInput = `input[name='password']`;   // Locator for password input field

  loginButton(buttonText) {
    return (`//button[contains(.,'${buttonText}')]`);
  }

  additionalInformationBanner = `//div[contains(@class,'validation-badge')and contains (.,'Additional information needed')]`;
}

module.exports = LoginPage;
