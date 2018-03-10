module.exports = class LoginObject {
  get username() {
    return $('input[name="us1"]');
  }

  get password() {
    return $('input[name="pw1"]');
  }

  get submit () {
    //return $('button*=Sign in');
  }
};

// module.exports = {
//   Login: Login
// };
