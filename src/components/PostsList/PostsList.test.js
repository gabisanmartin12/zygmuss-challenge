import { render, screen } from '@testing-library/react';
import PostsList from './PostsList';

const POST = {
  id: 1,
  title: 'A title',
  body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
};

const POSTS = [
  {
    id: 1,
    title: 'A title 1',
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 2,
    title: 'A title 2',
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 3,
    title: 'A title 3',
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 4,
    title: 'A title 4',
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
];

describe('UI PostsList component', () => {
  test('should display no posts message', () => {
    render(<PostsList posts={[]} />);
    expect(screen.getByText(/there are no posts to show/i)).toBeInTheDocument();
  });

  test('should display post title and body', () => {
    render(<PostsList posts={[POST]} />);

    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getAllByRole('listitem').length).toBe(1);

    expect(screen.getByText(POST.title)).toBeInTheDocument();
    expect(screen.getByText(POST.body)).toBeInTheDocument();
  });

  test('should display all the posts', () => {
    render(<PostsList posts={POSTS} />);

    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getAllByRole('listitem').length).toBe(POSTS.length);
  });
});
