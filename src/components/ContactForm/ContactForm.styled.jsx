import { Form as FormikForm } from 'formik';
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 500px;
  margin: 15px auto;
  padding: 15px;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 5px;
  box-shadow: 0 15px 30px 1px grey;
  text-align: center;
`;

export const Form = styled(FormikForm)`
  padding: 8px;
  border: 1px solid #2a2a2a;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 10px;
`;

export const ErrorInfo = styled.span`
  font-size: 14px;
  color: #38d2d2;
`;

export const ButtonForm = styled.button`
  width: 200px;
  margin: 0 auto;
  color: #fff;
  padding: 15px 25px;
  background-color: #38d2d2;
  background-image: radial-gradient(
      93% 87% at 87% 89%,
      rgba(0, 0, 0, 0.23) 0%,
      transparent 86.18%
    ),
    radial-gradient(
      66% 66% at 26% 20%,
      rgba(255, 255, 255, 0.55) 0%,
      rgba(255, 255, 255, 0) 69.79%,
      rgba(255, 255, 255, 0) 100%
    );
  box-shadow: inset -3px -3px 9px rgba(255, 255, 255, 0.25),
    inset 0px 3px 9px rgba(255, 255, 255, 0.3),
    inset 0px 1px 1px rgba(255, 255, 255, 0.6),
    inset 0px -8px 36px rgba(0, 0, 0, 0.3),
    inset 0px 1px 5px rgba(255, 255, 255, 0.6), 2px 19px 31px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  font-weight: bold;
  font-size: 16px;
  display: block;
  border: 0;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  cursor: pointer;
  &:hover {
    box-shadow: rgba(255, 255, 255, 0.2) 0 3px 15px inset,
      rgba(0, 0, 0, 0.1) 0 3px 5px, rgba(0, 0, 0, 0.1) 0 10px 13px;
    transform: scale(1.05);
  }
`;
