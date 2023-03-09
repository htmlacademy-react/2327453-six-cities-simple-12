import {Link} from 'react-router-dom';

function NotFound(): JSX.Element {
  return (
    <main className="page__main page__main--property">
      <section className="property">
        <div className="property__container container">
          <div className="property__wrapper">
            <div className="property__name-wrapper">
              <h2>404 Not Found</h2>
              <Link to='/'>Go to main page</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default NotFound;
