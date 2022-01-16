export const extractMessageFromApiResponse = (response) => {
  if (response.hasOwnProperty('email')) {
    return response.email
  } else if (response.hasOwnProperty('detail')) {
    return response.detail
  } else if (response.hasOwnProperty('non_field_errors')) {
    return response.non_field_errors
  } else if (response.hasOwnProperty('password1')) {
    return response.password1
  } else {
    return 'IS IT BUGGED'
  }
}
