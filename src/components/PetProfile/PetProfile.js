const PetProfile = () => {
  return (
    <section>
      <div className={"block"}>寵愛卡</div>
      <div className={"control"}>
        <div>品種</div>
        <div>Id.</div>
        <div>名字</div>
        <div>性別</div>
        <div>年齡</div>
        <div>結紮</div>
      </div>
      <div className={"action"}>
        <a href="/">
          <svg
            className="group-hover:text-blue-500 mb-1 text-gray-400"
            width="20"
            height="20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z" />
          </svg>
          新增照片
        </a>
      </div>
    </section>
  );
};

export default PetProfile;
