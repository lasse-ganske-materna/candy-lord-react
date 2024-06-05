import React from "react";
import { Candy } from "../../enums/Candy";

interface Props {
  candy: Candy;
  dialogId: string;
  handleBuyCandy: (amount: number) => void;
  handleSellCandy: (amount: number) => void;
}

const StreetDialog = ({
  candy,
  dialogId,
  handleBuyCandy,
  handleSellCandy,
}: Props) => {
  const [inputAmount, setInputAmount] = React.useState(0);

  function handleOnChange(event) {
    if (/^\d*$/.test(event.target.value)) {
      setInputAmount(event.target.value);
    }
  }

  const handleKeyPress = (e: { key: string; preventDefault: () => void }) => {
    // Verhindern, dass nicht-numerische Zeichen eingegeben werden
    if (!/^\d$/.test(e.key)) {
      e.preventDefault();
    }
  };

  return (
    <>
      <dialog id={dialogId} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-center">{candy.name}</h3>
          <input
            type="number"
            min={1}
            value={inputAmount}
            onChange={handleOnChange}
            onKeyDown={handleKeyPress}
            className="input input-bordered w-full max-w-xs my-5"
          />
          <div className="modal-action flex flex-col items-center">
            <form method="dialog" className="flex justify-between w-full gap-5">
              {/* if there is a button in form, it will close the modal */}
              <button
                className="btn flex-1"
                onClick={() => handleBuyCandy(inputAmount)}
              >
                Kaufen
              </button>
              <button
                className="btn flex-1"
                onClick={() => handleSellCandy(inputAmount)}
              >
                Verkaufen
              </button>
              <button className="btn flex-0" onClick={() => setInputAmount(0)}>
                Abbrechen
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default StreetDialog;
