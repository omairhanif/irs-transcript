
export default function NotFound() {
  return (
    <>
      <div className="container section-padding-60">
        <div className="row"><div className="col-lg-6 mx-auto text-center">
          <img src="/assets/imgs/theme/page-not-found.png" alt="404 Not Found" className="img-fluid mb-30" style={{ maxHeight: 300 }} />
          <h1 className="font-weight-900 mb-15">Page Not Found</h1>
          <p className="text-muted font-medium mb-30">
            The page you are looking for does not exist. It may have been moved or deleted.
          </p>
          <a href="/" className="btn btn-primary font-small mr-15">Go to Home</a>
          <a href="/types-of-irs-transcripts" className="btn btn-light font-small">Browse Guides</a>
        </div></div>
      </div>
    </>
  );
}
