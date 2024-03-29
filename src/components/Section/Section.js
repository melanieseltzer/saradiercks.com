import { MaxWidthContainer } from '../MaxWidthContainer';

export const Section = ({ title, children }) => (
  <MaxWidthContainer as="section" aria-labelledby={title.toLowerCase()}>
    <h2
      className="text-gray-900 mb-6 text-2xl sm:text-3xl font-extrabold tracking-tight"
      id={title.toLowerCase()}
    >
      {title}
    </h2>

    {children}
  </MaxWidthContainer>
);
