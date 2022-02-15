export class TransformService {
  static fbObjectToArray(fbdata) {
    return Object.keys(fbdata).map((keys) => {
      const item = fbdata[keys]; //В item помещаем обект поста
      console.log(item);
      item.id = keys; // Добавляем в наши посты id, который является хэш-суммой полученной от сервера, и возвращаем в виде объекта
      return item;
    });
  }
}
