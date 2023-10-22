export default function EventBasic(){
  const current = () => {
    const d = new Date();
    switch(type){
      case 'date':
        console.log(d.toLocaleDateString());
        break;
      case 'time':
        console.log(d.toLocaleTimeString());
        break;
      default:
        console.log(d.toLocaleString());
        break;
    }
  };

  return (
    <>
      <button onClick={current}>現在時刻を取得</button>
    </>
  );
}
