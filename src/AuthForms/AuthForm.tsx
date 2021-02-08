import React from 'react';
import {
  Wrapper,
  Form,
  Content,
  InputName,
  Input,
  InputItem,
  Button,
  Title,
} from "@/AuthForms/AuthFormStyles";
import {colors} from "@/utils/colors";

interface IProps {
  type: 'login' | 'sing-up';
}

export class AuthForm extends React.PureComponent<IProps> {
  state = {
    email: '',
    password: '',
    emailError: false,
    passwordError: false,
  };

  private validateEmail = (email: string) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  private emailInputHandler = (e: any) => {
    const value = e.target.value;
    const isValid = this.validateEmail(value);

    this.setState({
      email: value,
      emailError: !isValid,
    });
  };

  private passwordInputHandler = (e: any) => {
    const value = e.target.value;

    this.setState({
      password: value,
      passwordError: !value.length,
    });
  };

  private sendButtonHandler = () => {
    const {
      email,
      password,
    } = this.state;
    const isEmailFalsy = !this.validateEmail(email);
    const isPasswordFalsy = password.length === 0;

    if (isEmailFalsy && isPasswordFalsy) {
      this.setState({emailError: true, passwordError: true});
      return;
    }

    if (isEmailFalsy) {
      this.setState({emailError: true});
      return;
    }

    if (isPasswordFalsy) {
      this.setState({passwordError: true});
      return;
    }

    // дернуть сагу и обработать токен

    this.setState({name: '', contact: ''});
  };

  private getInputsView = () => {
    const {email, password, emailError, passwordError} = this.state;

    return (
      <>
        <Content>
          <InputItem>
            <InputName>Почта</InputName>
            <Input
              borderColor={emailError ? 'red' : colors.gray10}
              onChange={this.emailInputHandler}
              value={email}
            />
          </InputItem>
          <InputItem>
            <InputName>Пароль</InputName>
            <Input
              borderColor={passwordError ? 'red' : colors.gray10}
              onChange={this.passwordInputHandler}
              value={password}
            />
          </InputItem>
        </Content>
        <Button onClick={this.sendButtonHandler}>Отправить</Button>
      </>
    );
  };

  private getAuthTitle = () => {
    const {type} = this.props;

    if (type === 'login') {
      return <Title>Вход</Title>;
    }

    return <Title>Регистрация</Title>;
  };

  render() {
    return (
      <Wrapper>
        <Form>
          {this.getAuthTitle()}
          {this.getInputsView()}
        </Form>
      </Wrapper>
    );
  }
}