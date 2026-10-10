import type { Jersy } from "../../types/player";

interface Singleplayercardprops {
  player: Jersy;
}

const Singleplayercard = ({ player }: Singleplayercardprops) => {
  return (
    <div className="">
      <div className="card bg-base-100 m-2.5 px-2.5 py-2.5  shadow-sm">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Card Title
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Singleplayercard;
