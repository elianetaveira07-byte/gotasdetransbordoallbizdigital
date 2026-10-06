export const setPageMeta = (title: string, description: string) => {
  document.title = title;

  const update = (selector: string, value: string) => {
    const element = document.querySelector<HTMLMetaElement>(selector);
    element?.setAttribute('content', value);
  };

  update('meta[name="description"]', description);
  update('meta[property="og:title"]', title);
  update('meta[property="og:description"]', description);
  update('meta[property="og:type"]', 'website');
  update('meta[name="twitter:title"]', title);
  update('meta[name="twitter:description"]', description);
  update('meta[name="twitter:card"]', 'summary');
};
