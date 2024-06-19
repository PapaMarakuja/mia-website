import './main.scss';

function Main() {
  return (
    <section className='main-section'>
      <div className='main-text'>
        <h1 className='main-title'>Hello, I am Mia, a brand designer</h1>
        <p className='main-sub-title'>
          With a disruptive vision and authenticity that break barriers, I create
          authentic and impactful brands.
        </p>
        <div className='btn-section gap-1 md:flex-row'>
          <button className='btn btn-secondary w-fit'>Get in touch</button>
          <button className='btn btn-secondary-ghost w-fit'>Check projects</button>
        </div>
      </div>
      <div className='main-image'>
        <img src='/src/assets/main-image.png' />
      </div>
    </section>
  );
}

export default Main;
