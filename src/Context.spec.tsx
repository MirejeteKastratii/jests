// import { render, screen } from '@testing-library/react';
// import {DataContext } from './Context';

// describe('DataContext', () => {
//   it('renders without crashing', () => {
//     render(
//       <DataContext>
//         <div data-testid="test-child">Test Child</div>
//       </DataContext>
//     );
//     expect(screen.getByTestId('test-child')).toBeInTheDocument();
//   });

// //   describe('useData hook', () => {
// //     it('returns the correct context value', () => {
// //       const TestComponent = () => {
// //         const data = useData();
// //         return (
// //           <div>
// //             <p>{data.users.length}</p>
// //             <button onClick={() => data.addUser({ id: 6, name: 'New User' })}>
// //               Add User
// //             </button>
// //           </div>
// //         );
// //       };

// //       render(
// //         <DataContext>
// //           <TestComponent />
// //         </DataContext>
// //       );

// //       expect(screen.getByText(/users length/)).toBeInTheDocument();
// //       expect(screen.getByText(/Add User/)).toBeInTheDocument();

// //       const addButton = screen.getByRole('button', { name: /Add User/ });
// //       addButton.click();

// //       expect(data.addUser).toHaveBeenCalledWith({ id: 6, name: 'New User' });
// //     });

// //     it('updates users when addUser is called', () => {
// //       const TestComponent = () => {
// //         const data = useData();
// //         return (
// //           <div>
// //             {data.users.map((user) => (
// //               <p key={user.id}>{user.name}</p>
// //             ))}
// //           </div>
// //         );
// //       };

// //       render(
// //         <DataContext>
// //           <TestComponent />
// //         </DataContext>
// //       );

// //       // Add a user
// //       const addUserButton = screen.getByRole('button', { name: /Add User/ });
// //       addUserButton.click();

// //       // Check if the number of users has increased
// //       expect(screen.getAllByText(/Test/)).toHaveLength(2);
// //     });

// //     it('updates users when editUser is called', () => {
// //       const TestComponent = () => {
// //         const data = useData();
// //         return (
// //           <div>
// //             <p>{data.users[0].name}</p>
// //             <button onClick={() => data.editUser(data.users[0])}>
// //               Edit User 1
// //             </button>
// //           </div>
// //         );
// //       };

// //       render(
// //         <DataContext>
// //           <TestComponent />
// //         </DataContext>
// //       );

// //       // Check initial name
// //       expect(screen.getByText(/Test/)).toBeInTheDocument();

// //       // Click edit button
// //       const editButton = screen.getByRole('button', { name: /Edit User 1/ });
// //       editButton.click();

// //       // Check if the name has changed (you might need to mock the data here)
// //       expect(data.editUser).toHaveBeenCalledWith(data.users[0]);
// //     });

// //     it('deletes users when deleteUser is called', () => {
// //       const TestComponent = () => {
// //         const data = useData();
// //         return (
// //           <div>
// //             {data.users.map((user) => (
// //               <p key={user.id}>{user.name}</p>
// //             ))}
// //             <button onClick={() => data.deleteUser(1)}>Delete User 1</button>
// //           </div>
// //         );
// //       };

// //       render(
// //         <DataContext>
// //           <TestComponent />
// //         </DataContext>
// //       );

// //       // Check initial number of users
// //       expect(screen.getAllByText(/Test/)).toHaveLength(5);

// //       // Click delete button
// //       const deleteButton = screen.getByRole('button', { name: /Delete User 1/ });
// //       deleteButton.click();

// //       // Check if the number of users has decreased
// //       expect(screen.getAllByText(/Test/)).toHaveLength(4);
// //     });

// //     it('gets user by ID', () => {
// //       const TestComponent = () => {
// //         const data = useData();
// //         return (
// //           <div>
// //             <p>{data.getUserById(1)?.name}</p>
// //             <button onClick={() => console.log(data.getUserById(1))}>
// //               Get User 1
// //             </button>
// //           </div>
// //         );
// //       };

// //       render(
// //         <DataContext>
// //           <TestComponent />
// //         </DataContext>
// //       );

// //       // Check if we can get user by ID
// //       expect(data.getUserById).toHaveBeenCalledWith(1);
// //     });
// //   });

// //   describe('initial state', () => {
// //     it('starts with default users', () => {
// //       render(<DataContext />);
      
// //       expect(screen.getByText(/Test/)).toBeInTheDocument();
// //       expect(screen.getByText(/Test1/)).toBeInTheDocument();
// //       expect(screen.getByText(/Test2/)).toBeInTheDocument();
// //       expect(screen.getByText(/Test3/)).toBeInTheDocument();
// //       expect(screen.getByText(/Test4/)).toBeInTheDocument();
// //     });
// //   });
// });
