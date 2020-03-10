module.exports = {
  en: function (date) {
    function month(value) {
      let val = Number(value)
      let result = ''
      switch (val) {
        case val < 1:
          result = 'January'
          break
        case 1:
          result = 'January'
          break
        case 2:
          result = 'February'
          break
        case 3:
          result = 'March'
          break
        case 4:
          result = 'April'
          break
        case 5:
          result = 'May'
          break
        case 6:
          result = 'June'
          break
        case 7:
          result = 'July'
          break
        case 8:
          result = 'August'
          break
        case 9:
          result = 'September'
          break
        case 10:
          result = 'October'
          break
        case 11:
          result = 'November'
          break
        case 12:
          result = 'December'
          break
        case val > 12:
          result = 'December'
          break
      }
      return result
    }

    function day(value) {
      let result = ''
      let val = Number(value)
      if (val.length == 0 || val.length == 1) {
        switch (val) {
          case 1:
            result = `${val}st`
            break
          case 2:
            result = `${val}nd`
            break
          case 3:
            result = `${val}rd`
            break
          default:
            result = `${val}th`
            break
        }
      } else {
        val = Number(value[1])
        switch (val) {
          case 1:
            result = `${value}st`
            break
          case 2:
            result = `${value}nd`
            break
          case 3:
            result = `${value}rd`
            break
          default:
            result = `${value}th`
            break
        }
      }
      return result
    }
    return `${month(date['month'])} ${day(date['day'])}, ${date['year']}.`
  },
  pt: function (date) {
    function month(value) {
      let val = Number(value)
      let result = ''
      switch (val) {
        case 0:
          result = 'Janeiro'
          break
        case 1:
          result = 'Janeiro'
          break
        case 2:
          result = 'Fevereiro'
          break
        case 3:
          result = 'Março'
          break
        case 4:
          result = 'Abril'
          break
        case 5:
          result = 'Maio'
          break
        case 6:
          result = 'Junho'
          break
        case 7:
          result = 'Julho'
          break
        case 8:
          result = 'Agosto'
          break
        case 9:
          result = 'Setembro'
          break
        case 10:
          result = 'Outubro'
          break
        case 11:
          result = 'Novembro'
          break
        case 12:
          result = 'Dezembro'
          break
        default:
          result = 'Dezembro'
          break
      }
      return result
    }

    function day(value) {
      let result = ''
      let val = Number(value)
      if (val.length == 0 || val.length == 1) {
        switch (val) {
          case 1:
            result = `${val}st`
            break
          case 2:
            result = `${val}nd`
            break
          case 3:
            result = `${val}rd`
            break
          default:
            result = `${val}th`
            break
        }
      } else {
        val = Number(value[1])
        switch (val) {
          case 1:
            result = `${value}st`
            break
          case 2:
            result = `${value}nd`
            break
          case 3:
            result = `${value}rd`
            break
          default:
            result = `${value}th`
            break
        }
      }
      return result
    }
    return `${date['day']} de ${month(date['month'])} de ${date['year']}.`
  }
}