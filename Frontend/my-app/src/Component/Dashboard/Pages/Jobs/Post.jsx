import React, { useContext } from "react";
import { Container, Row, Col } from "react-grid-system";
import { Button, ConfigProvider, Space } from "antd";
import { AntDesignOutlined } from "@ant-design/icons";
import { css } from "@emotion/css";
import Invite from "../../../Images/Invite.png";

function Post() {
  const lineSegments = [14, 2, 1];
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const rootPrefixCls = getPrefixCls();
  const linearGradientButton = css`
    &.${rootPrefixCls}-btn-primary:not([disabled]):not(
        .${rootPrefixCls}-btn-dangerous
      ) {
      border-width: 0;

      > span {
        position: relative;
      }

      &::before {
        content: "";
        background: linear-gradient(135deg, rgba(89, 86, 233, 1), #04befe);
        position: absolute;
        inset: 0;
        opacity: 1;
        transition: all 0.3s;
        border-radius: inherit;
      }

      &:hover::before {
        opacity: 0;
      }
    }
  `;
  return (
    <div className="w-full  h-72 mt-3 rounded-lg bg-gradient-to-r from-blue-300 to-white-100">
      <Container>
        <Row>
          <Col sm={8}>
            <div className="data flex-col mt-16 ">
              <div>
                <p
                  style={{ color: "rgba(89, 86, 233, 1)" }}
                  className=" flex gap-2 text-3xl font-semibold "
                >
                  Corporate <p className="text-white">Connects</p>
                </p>
              </div>
              <div className="line flex gap-3">
                {lineSegments.map((width, index) => (
                  <div
                    key={index}
                    className="bg-violet-700 h-1 mt-3 "
                    style={{ width: `${width}rem` }}
                  />
                ))}
              </div>
              <ConfigProvider
                button={{
                  className: linearGradientButton,
                }}
              >
                <Button
                  type="primary"
                  size="large"
                  icon={<AntDesignOutlined />}
                  className="mt-10"
                >
                  Invite
                </Button>
              </ConfigProvider>
            </div>
          </Col>
          <Col>
            <div className="">
              <img className="w-48 h-64" src={Invite} alt="img" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Post;
