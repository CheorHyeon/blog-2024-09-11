export const genTOCId = (text: string) => {
    return text
          // 특수기호, 공백 제거
          .replace(/[\[\]:!@#$/%^&*()+=,.?]/g, "")
          .replace(/ /g, "-")
          .toLowerCase();
}