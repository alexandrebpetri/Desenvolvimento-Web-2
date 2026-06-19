`### 3. 🐛 Sintoma: warning no console "Each child in a list should have a unique key prop".

**Dica:** o React precisa reconhecer cada nota entre uma renderização e outra. Procure no objeto uma informação estável e exclusiva para cada item.`

//jsx

<ul>
  {notas.map((nota) => (
    <li>{nota.texto}</li>
  ))}
</ul>

// Conserte:

<ul>
  {notas.map((nota) => (
    <li key={nota.id}>{nota.texto}</li>
  ))}
</ul>
