// static/script.js

// 예시용 학생 계정 데이터
const studentAccounts = [
  { id: '2401', name: '홍길동', email: '2401@school.com', password: 'pass1234' },
  { id: '2402', name: '김민수', email: '2402@school.com', password: 'pw5678' },
  { id: '2403', name: '이서연', email: '2403@school.com', password: 'abc9876' },
  { id: '2404', name: '김태연', email: '2404@school.com', password: 'pw9876' }
  // 이 아래에 더 많은 데이터를 추가할 수 있어요
];

document.getElementById('search-form').addEventListener('submit', function (e) {
  e.preventDefault(); // 폼 기본 동작 막기

  const inputId = document.getElementById('student-id').value.trim();
  const inputName = document.getElementById('student-name').value.trim();

  const resultBox = document.getElementById('result');

  // 입력값 검사
  if (inputId === '' || inputName === '') {
    resultBox.innerHTML = '⚠️ 학번과 이름을 모두 입력해 주세요.';
    resultBox.style.display = 'block';
    return;
  }

  // 학생 정보 찾기
  const student = studentAccounts.find(
    (s) => s.id === inputId && s.name === inputName
  );

  if (student) {
    resultBox.innerHTML = `
      ✅ <strong>${student.name}</strong> 학생의 구글 계정 정보입니다:<br><br>
      📧 <strong>ID</strong>: ${student.email}<br>
      🔑 <strong>PW</strong>: ${student.password}
    `;
  } else {
    resultBox.innerHTML = '❌ 해당하는 학생 정보를 찾을 수 없습니다. 다시 확인해 주세요.';
  }

  resultBox.style.display = 'block';
});
