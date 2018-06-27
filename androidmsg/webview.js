module.exports = (Franz) => {

  let extractNumber = function (string) {
    let extractedNumber = string.replace(/^\D+|\D+$/g, "")
    if (extractedNumber === '') extractedNumber = 0
    return extractedNumber
  }

  function getMessages() {
    let direct = 0;
    let indirect = 0;
    direct = parseInt(extractNumber(document.title))
    console.log('hey')

    Franz.setBadge(direct, indirect);
  }

  Franz.loop(getMessages);
}
