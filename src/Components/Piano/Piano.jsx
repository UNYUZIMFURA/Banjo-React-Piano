import WhiteKey from './WhiteKey'
import WhiteKey2 from './WhiteKey2'

const Piano = () => {
  
  return (
    <div className="flex justify-center h-[25vh] w-[50%] bg-[gray] mt-[30vh] mx-auto">
      <div className="flex w-[46.5%] bg-[rgb(16, 16, 16)] gap-[2px]">
      <WhiteKey keyName="do"/>
      <WhiteKey keyName="re"/>
      <WhiteKey2 keyName="mi"/>
      <WhiteKey keyName="fa"/>
      <WhiteKey keyName="sol"/>
      <WhiteKey keyName="la"/>
      <WhiteKey2 keyName="si"/>
      </div>
      <div className="flex w-[46.5%] bg-[rgb(16, 16, 16)] gap-[2px]">
      <WhiteKey keyName="do"/>
      <WhiteKey keyName="re"/>
      <WhiteKey2 keyName="mi"/>
      <WhiteKey keyName="fa"/>
      <WhiteKey keyName="sol"/>
      <WhiteKey keyName="la"/>
      <WhiteKey2 keyName="si"/>
      </div>
    </div>
  );
};

export default Piano;
