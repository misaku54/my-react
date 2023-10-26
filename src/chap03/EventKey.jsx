export default function EventKey(){
  const handleKey = (e) => {
    if(e.ctrlKey && e.key === 'q'){
      alert('名前は２０文字以内で入力してください')
    }
  };

  return (
    <form>
      <label>
        名前：
        <input type="text" size="20" onKeyDown={handleKey}></input>
      </label>
    </form>
  )
}