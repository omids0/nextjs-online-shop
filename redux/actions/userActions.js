export const saveUserInfoAction = (userinfo) => (dispatch, getState) => {
      dispatch({ type: "SAVE_USER_INFO", payload: userinfo})
      const userstate = getState().userReducers.userinfo
      localStorage.setItem('omidshopuser', JSON.stringify(userstate))
}