export default function capitalize(str) {
  // let first = str[0];
  // const str1 = first.toUpperCase() + str.slice(1);
  const str1 = str.replace(str[0], str[0].toUpperCase());
  return str1;
}
