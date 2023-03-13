/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    this.data = rows;       
    this.render();
  }

  render() {
    this.elem = document.createElement('TABLE');

    this.elem.insertAdjacentHTML('beforeEnd', `<thead>
      <tr>
        <th>Имя</th>
        <th>Возраст</th>
        <th>Зарплата</th>
        <th>Город</th>
      </tr>                    
    </thead>`);

    this.elem.insertAdjacentHTML('beforeEnd', this.data.map(item => `<tbody>
      <tr>
        <td>${item.name}</td>
        <td>${item.age}</td>
        <td>${item.salary}</td>
        <td>${item.city}</td>
        <td><button class="remove-button">[x]</button></td>
      </tr>                    
    </tbody>`).join(''));

    this.elem.addEventListener('click', this.onClick);

    return this.elem;
  }

  onClick = (event) => {

  if (event.target.className != 'remove-button') return;
      let tr = event.target.closest('TR');
      tr.remove();
  }

}
