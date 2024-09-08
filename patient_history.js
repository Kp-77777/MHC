const patients = {
    1: {
        name: 'John Doe',
        age: 45,
        previousVisitDate: '01/01/2024',
        nextVisitDate: '02/01/2024',
        mentalProblem: 'Anxiety',
        medicines: 'Medicine A, Medicine B'
    },
    2: {
        name: 'Jane Smith',
        age: 30,
        previousVisitDate: '01/15/2024',
        nextVisitDate: '02/15/2024',
        mentalProblem: 'Depression',
        medicines: 'Medicine C, Medicine D'
    },
    3: {
        name: 'Michael Johnson',
        age: 40,
        previousVisitDate: '01/22/2024',
        nextVisitDate: '02/22/2024',
        mentalProblem: 'Bipolar Disorder',
        medicines: 'Medicine E, Medicine F'
    }
};

document.querySelectorAll('.patient-item').forEach(item => {
    item.addEventListener('click', function() {
        const patientId = this.getAttribute('data-patient-id');
        const patient = patients[patientId];

        document.getElementById('patient-name').textContent = patient.name;
        document.getElementById('patient-age').textContent = patient.age;
        document.getElementById('previous-visit-date').textContent = patient.previousVisitDate;
        document.getElementById('next-visit-date').textContent = patient.nextVisitDate;
        document.getElementById('mental-problem').textContent = patient.mentalProblem;
        document.getElementById('medicines').textContent = patient.medicines;
    });
});
