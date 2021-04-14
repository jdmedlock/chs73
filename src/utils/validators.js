const emailValidator = () => {
  return function email (value) {
    return (value && !!value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) || 'Please enter a valid email'
  }
}

const nameValidator = () => {
  return function name (value) {
    return (value && !!value.match(/^[a-zA-Z]+(?:-[a-zA-Z]+)*$/)) || 'Please enter a first & last name'
  }
}

const requiredValidator = () => {
  return function required (value) {
    return (value !== undefined && value !== null && value !== '') || 'This field is required'
  }
}



export {
  emailValidator,
  nameValidator,
  requiredValidator
}
