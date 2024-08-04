import './recent-projects.scss';

function RecentProjects() {
  return (
    <section id='projects' className='flex text-center gap-8 services-section'>
      <h1 className='main-title'>
        Recent
        <br /> Projects
      </h1>

      <div className='projects-grid'>
        <div className='projects-col'>
          <div className='item'>
            <img src='/src/assets/grid-image-1.png' alt='' />
          </div>
          <div className='item'>
            <img src='/src/assets/grid-image-3.png' alt='' />
          </div>
        </div>
        <div className='projects-col'>
          <div className='item'>
            <img src='/src/assets/grid-image-2.png' alt='' />
          </div>
          <div className='item'>
            <img src='/src/assets/grid-image-4.png' alt='' />
          </div>
        </div>
      </div>
    </section>
  );
}

export default RecentProjects;
