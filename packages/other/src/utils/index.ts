/**
 * B转换到KB,MB,GB并保留两位小数
 * @param  fileSize 文件大小
 * @returns 格式化后结果
 */
const formatFileSize=(fileSize:number)=> {
  let temp;
  if (fileSize < 1024) {
      return fileSize + 'B';
  } else if (fileSize < (1024 * 1024)) {
      temp = fileSize / 1024;
      temp = temp.toFixed(2);
      return temp + 'KB';
  } else if (fileSize < (1024 * 1024 * 1024)) {
      temp = fileSize / (1024 * 1024);
      temp = temp.toFixed(2);
      return temp + 'MB';
  } else {
      temp = fileSize / (1024 * 1024 * 1024);
      temp = temp.toFixed(2);
      return temp + 'GB';
  }
}

export {
  formatFileSize
}