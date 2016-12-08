-- Table: contacts

-- DROP TABLE contacts;

CREATE TABLE contacts
(
  id serial NOT NULL,
  name character varying(200),
  email character varying(200),
  ph_no character varying(10),
  created_ts timestamp without time zone NOT NULL DEFAULT now(),
  country_id integer,
  CONSTRAINT id_pk PRIMARY KEY (id)
)
WITH (
  OIDS=FALSE
);
ALTER TABLE contacts
  OWNER TO postgres;
-- Table: countries

-- DROP TABLE countries;

CREATE TABLE countries
(
  id serial NOT NULL,
  name character varying(200),
  CONSTRAINT pk_id PRIMARY KEY (id)
)
WITH (
  OIDS=FALSE
);
ALTER TABLE countries
  OWNER TO postgres;
-- Table: interests

-- DROP TABLE interests;

CREATE TABLE interests
(
  id integer NOT NULL DEFAULT nextval('interest_id_seq'::regclass),
  name character varying(200)
)
WITH (
  OIDS=FALSE
);
ALTER TABLE interests
  OWNER TO postgres;
-- Table: contact_interest_mapping

-- DROP TABLE contact_interest_mapping;

CREATE TABLE contact_interest_mapping
(
  id serial NOT NULL,
  contact_id integer,
  interest_id integer
)
WITH (
  OIDS=FALSE
);
ALTER TABLE contact_interest_mapping
  OWNER TO postgres;
