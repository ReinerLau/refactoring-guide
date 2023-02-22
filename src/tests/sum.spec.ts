/*
 * @Author: ReinerLau lk850593913@gmail.com
 * @Date: 2023-02-22 13:27:26
 * @LastEditors: ReinerLau lk850593913@gmail.com
 * @LastEditTime: 2023-02-22 13:31:42
 * @FilePath: \refactoring-guide\src\tests\sum.spec.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import sum from '../sum'

test("test", () => {
  expect(sum(1, 2)).toBe(3);
});
