type PropsType = {
  str: string;
  num: number;
};
export default function truncateString({ str, num }: PropsType) {
  if (str.length <= num) {
    return str;
  }
  return str.slice(0, num) + "...";
}
