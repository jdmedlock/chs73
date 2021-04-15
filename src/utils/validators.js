const emailValidator = (value) => {
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return regex.test(value) || 'Please enter a valid email'
}

const nameValidator = (value) => {
  const regex = /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/
  return regex.test(value) || 'Please enter your first & last name'
}

const requiredValidator = () => {
  return (value !== undefined && value !== null && value !== '') || 'This field is required'
}

const stateValidator = (value) => {
  const regex = /^(([Aa][EeLlKkSsZzRr])|([Cc][AaOoTt])|([Dd][EeCc])|([Ff][MmLl])|([Gg][AaUu])|([Hh][Ii])|([Ii][DdLlNnAa])|([Kk][SsYy])|([Ll][Aa])|([Mm][EeHhDdAaIiNnSsOoTt])|([Nn][EeVvHhJjMmYyCcDd])|([Mm][Pp])|([Oo][HhKkRr])|([Pp][WwAaRr])|([Rr][Ii])|([Ss][CcDd])|([Tt][NnXx])|([Uu][Tt])|([Vv][TtIiAa])|([Ww][AaVvIiYy]))$/

  return regex.test(value) || 'Please enter a valid U.S. state abbreviation'
}

const zipcodeValidator = (value) => {
  const regex = /^[0-9]{5}(?:-[0-9]{4})?$/
  return regex.test(value) || 'Please enter a valid U.S. zip code'
}

export {
  emailValidator,
  nameValidator,
  stateValidator,
  zipcodeValidator,
  requiredValidator
}
