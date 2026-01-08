// 写一个判断域名的函数
export function isValidDomain(domain: string): boolean {
  // 创建一个正则表达式，用于匹配域名
  const regex = /^(?!:\/\/)([a-zA-Z0-9-_]+\.)*[a-zA-Z0-9][a-zA-Z0-9-_]+\.[a-zA-Z]{2,11}?$/;

  // 使用正则表达式匹配域名
  return regex.test(domain)
}