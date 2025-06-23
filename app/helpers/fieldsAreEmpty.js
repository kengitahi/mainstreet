export default function fieldsAreEmpty(formDataObject) {
  if (typeof formDataObject !== 'object' || formDataObject === null) {
    return true;
  }

  
  for (const value of Object.values(formDataObject)) {
    const trimmedValue = value ? String(value).trim() : '';

    // If the trimmed value is falsy or an empty string return true
    if (!trimmedValue) {
      return true;
    }
  }

  return false; // All values are valid
}