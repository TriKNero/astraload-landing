const mobile = "@media (max-width: 920px)"
const theme = {
  mobile,
  body: {
    fontSize: "14px",
    color: "#212121",
  },

  defaultContainer: {
    padding: "30px 135px",
    [mobile]: {
      padding: "10px 20px",
    },
  },
}

module.exports = { theme }