import { convertTime } from '../helpers/convertDuration';

describe('test if convertTime returns correct format', () => {
  test('convertTime 120 min', async () => {
    const result = convertTime(120);
    expect(result).toEqual('2h0m');
  });
  test('convertTime 164', async () => {
    const result = convertTime(164);
    expect(result).toEqual('2h44m');
  });
  test('convertTime 1634', async () => {
    const result = convertTime(1634);
    expect(result).toEqual('27h14m');
  });
  test('convertTime 1634', async () => {
    const result = convertTime(-1634);
    expect(result).toEqual('N/A');
  });
});
