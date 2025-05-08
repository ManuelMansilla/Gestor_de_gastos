const backArrow = document.getElementById('backArrow');
backArrow.addEventListener('click', () => {
  backArrow.classList.toggle('active');
});

const saveBtn = document.getElementById('saveBtn');
const operationsList = document.getElementById('operations-list');

saveBtn.addEventListener('click', () => {
  const amount = document.getElementById('amount').value.trim();
  const account = document.getElementById('account').value;
  const category = document.getElementById('category').value;
  const note = document.getElementById('note').value.trim();

  if (!amount || !account || !category) {
    alert('Por favor, completa monto, cuenta y categoría.');
    return;
  }

  const date = new Date().toLocaleDateString('es-AR', { day: '2-digit', month: '2-digit' });

  const li = document.createElement('li');
  li.className = 'operation-item';

  const infoDiv = document.createElement('div');
  infoDiv.className = 'operation-info';
  infoDiv.innerHTML = `
    <span>${date}</span>
    <span>${category}</span>
    <span>${amount}</span>
  `;

  const delBtn = document.createElement('button');
  delBtn.className = 'delete-btn';
  delBtn.textContent = '✕';
  delBtn.addEventListener('click', () => li.remove());

  li.appendChild(infoDiv);
  li.appendChild(delBtn);
  operationsList.appendChild(li);

  document.getElementById('amount').value = '';
  document.getElementById('note').value = '';
  document.getElementById('account').selectedIndex = 0;
  document.getElementById('category').selectedIndex = 0;
});
