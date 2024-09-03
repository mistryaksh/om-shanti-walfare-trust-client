import React from "react";
import { Button, Layout } from "../../core/components";
import { PageLayout } from "../../core/components/Layout/Page";
import { IoEye } from "react-icons/io5";

// DOCUMENTS
import MAINDOC from "./doc/MAIN_DOC.pdf";
import PAN from "./doc/PAN.pdf";
import ROC from "./doc/ROC.pdf";
import TEN_A from "./doc/10A.pdf";

export const CertificateLegal = () => {
  return (
    <Layout>
      <PageLayout title="Our Certificates">
        <div className="grid grid-cols-12 gap-10">
          <div className="xl:lg:col-span-6 md:sm:col-span-12 col-span-12 ">
            <h6 className="text-2xl mb-3">Registration of public trust</h6>
            <div style={{ height: "500px" }}>
              <iframe
                aria-controls={"none"}
                src={MAINDOC}
                width="100%"
                height="100%"
                style={{ border: "none" }}
                title="PDF Viewer"
              />
            </div>
            <div className="mt-3 gap-5 flex justify-end items-center">
              <a href={MAINDOC} target="_blank" rel="noreferrer">
                <Button>
                  <IoEye />
                </Button>
              </a>
              <a href={MAINDOC} download="example.pdf">
                <Button>Download File</Button>
              </a>
            </div>
          </div>
          <div className="xl:lg:col-span-6 md:sm:col-span-12 col-span-12 ">
            <h6 className="text-2xl mb-3">Organization PAN card</h6>
            <div style={{ height: "500px" }}>
              <iframe
                aria-controls={"none"}
                src={PAN}
                width="100%"
                height="100%"
                style={{ border: "none" }}
                title="PDF Viewer"
              />
            </div>
            <div className="mt-3 gap-5 flex justify-end items-center">
              <a href={PAN} target="_blank" rel="noreferrer">
                <Button>
                  <IoEye />
                </Button>
              </a>
              <a href={PAN} download="example.pdf">
                <Button>Download File</Button>
              </a>
            </div>
          </div>
          <div className="xl:lg:col-span-6 md:sm:col-span-12 col-span-12 ">
            <h6 className="text-2xl mb-3">ROC (Registration Of Certificate)</h6>
            <div style={{ height: "500px" }}>
              <iframe
                aria-controls={"none"}
                src={ROC}
                width="100%"
                height="100%"
                style={{ border: "none" }}
                title="PDF Viewer"
              />
            </div>
            <div className="mt-3 gap-5 flex justify-end items-center">
              <a href={ROC} target="_blank" rel="noreferrer">
                <Button>
                  <IoEye />
                </Button>
              </a>
              <a href={ROC} download="example.pdf">
                <Button>Download File</Button>
              </a>
            </div>
          </div>
          <div className="xl:lg:col-span-6 md:sm:col-span-12 col-span-12 ">
            <h6 className="text-2xl mb-3">10A</h6>
            <div style={{ height: "500px" }}>
              <iframe
                aria-controls={"none"}
                src={TEN_A}
                width="100%"
                height="100%"
                style={{ border: "none" }}
                title="PDF Viewer"
              />
            </div>
            <div className="mt-3 gap-5 flex justify-end items-center">
              <a href={TEN_A} target="_blank" rel="noreferrer">
                <Button>
                  <IoEye />
                </Button>
              </a>
              <a href={TEN_A} download="example.pdf">
                <Button>Download File</Button>
              </a>
            </div>
          </div>
        </div>
      </PageLayout>
    </Layout>
  );
};
