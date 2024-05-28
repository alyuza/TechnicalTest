import { useState } from 'react';
import styles from './Dashboard.module.scss';
import { getTZodiac } from './TableOfZodiac';

function DashboardContainer() {
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [result, setResult] = useState(null);

  const calculateAge = (dateOfBirth) => {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    const age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();
    const day = today.getDate() - birthDate.getDate();
    let finalAge = age;
    let finalMonth = month;
    let finalDay = day;

    if (month < 0 || (month === 0 && day < 0)) {
      finalAge--;
      finalMonth = (month + 12) % 12;
      if (day < 0) {
        finalMonth--;
        finalDay = 30 + day;
      }
    }

    return { years: finalAge, months: finalMonth, days: finalDay };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const age = calculateAge(dob);
    const zodiac = getTZodiac(dob);
    setResult({ name, age, zodiac });
  };

  return (
    <div className={styles.dashboardContainer}>
      {!result ? (
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>
              Nama:
              <input
                id="nameInput"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={styles.formInput}
                required
              />
            </label>
          </div>
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>
              Tanggal Lahir:
              <input
                id="dobInput"
                type="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                className={styles.formInput}
                required
              />
            </label>
          </div>
          <button type="submit" className={styles.submitButton}>Submit</button>
        </form>
      ) : (
        <div>
          <h2>Hallo {result.name}</h2>
          <p>Usia anda saat ini adalah :</p>
          <p>{result.age.years} Tahun,</p>
          <p>{result.age.months} Bulan,</p>
          <p> {result.age.days} Hari.</p>
          <p>Bintang anda adalah <br /> {result.zodiac}</p>
        </div>
      )}
    </div>
  );
}

export default DashboardContainer;