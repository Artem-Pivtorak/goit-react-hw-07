const Filter = ({ value, onChange }) => {
    return (
      <input
        type="text"
        placeholder="Пошук контакту"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{ padding: '8px', marginBottom: '15px', width: '100%' }}
      />
    );
  };
  
  export default Filter;
  