npx create-react-app my-app
npm init react-app my-app
cd my-app
npm start

- chuyển css thành scss : install sass : npm i --save sass

- chuyển phiên bản reactjs : 
        phiên bản 17 : npm install react@17.0.2 react-dom@17.0.2 --save
        phiên bản mới nhất : npm install react@latest react-dom@latest
        Bạn sẽ cần cập nhật @testing-library/reactlên phiên bản mới nhất để sử dụng đúng cách : npm i @testing-library/react@12.1.5
        Đây là dự định. Đối với Reach 17, hãy sử dụng @testing-library-react@^12.x. Đối với React 18, hãy sử dụng@testing-library-react@^13.x

- JSX cho phép hàm của js trả ra html
- <React.Fragment> cho in ra html bên trong mà không cần bọc div bên ngoài (hoặc dùng <></> cho phiên bản cao)