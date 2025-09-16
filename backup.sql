--
-- PostgreSQL database cluster dump
--

\restrict KZCX0Y6AxghiIZ8GsYm93T5xFIMVHCgreqSPf9izOn4feSTmQbpgez1FSpnjJzO

SET default_transaction_read_only = off;

SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;

--
-- Roles
--

CREATE ROLE notes_user;
ALTER ROLE notes_user WITH SUPERUSER INHERIT CREATEROLE CREATEDB LOGIN REPLICATION BYPASSRLS PASSWORD 'SCRAM-SHA-256$4096:XjXG3FQLCvbKfBsdubK9eg==$u5x9rfcsWpyq00YCgS5flkmQ6Dpfpswo2c6u5PNqjG8=:xFjwBMNhBF70a07zMlssu3QR27aGn41+rQz+nloMtZU=';

--
-- User Configurations
--








\unrestrict KZCX0Y6AxghiIZ8GsYm93T5xFIMVHCgreqSPf9izOn4feSTmQbpgez1FSpnjJzO

--
-- Databases
--

--
-- Database "template1" dump
--

\connect template1

--
-- PostgreSQL database dump
--

\restrict oPFuVRlHd6TbSUNL3Acq2TE7SRp4uORj3PFibh3Pwkiyfho4GSlGwZ5NbcNF3bi

-- Dumped from database version 17.6 (Debian 17.6-1.pgdg13+1)
-- Dumped by pg_dump version 17.6 (Debian 17.6-1.pgdg13+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- PostgreSQL database dump complete
--

\unrestrict oPFuVRlHd6TbSUNL3Acq2TE7SRp4uORj3PFibh3Pwkiyfho4GSlGwZ5NbcNF3bi

--
-- Database "notes" dump
--

--
-- PostgreSQL database dump
--

\restrict lgQWe1P89KcSS0Av8lQ6EmE3jl6mYGdWsynKWPWOCsCLg5RWUmIM3mvspkUi78c

-- Dumped from database version 17.6 (Debian 17.6-1.pgdg13+1)
-- Dumped by pg_dump version 17.6 (Debian 17.6-1.pgdg13+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: notes; Type: DATABASE; Schema: -; Owner: notes_user
--

CREATE DATABASE notes WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'en_US.utf8';


ALTER DATABASE notes OWNER TO notes_user;

\unrestrict lgQWe1P89KcSS0Av8lQ6EmE3jl6mYGdWsynKWPWOCsCLg5RWUmIM3mvspkUi78c
\connect notes
\restrict lgQWe1P89KcSS0Av8lQ6EmE3jl6mYGdWsynKWPWOCsCLg5RWUmIM3mvspkUi78c

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: note_tags; Type: TABLE; Schema: public; Owner: notes_user
--

CREATE TABLE public.note_tags (
    note_id integer NOT NULL,
    tag_id integer NOT NULL
);


ALTER TABLE public.note_tags OWNER TO notes_user;

--
-- Name: notes; Type: TABLE; Schema: public; Owner: notes_user
--

CREATE TABLE public.notes (
    id integer NOT NULL,
    title text NOT NULL,
    markdown text
);


ALTER TABLE public.notes OWNER TO notes_user;

--
-- Name: notes_id_seq; Type: SEQUENCE; Schema: public; Owner: notes_user
--

CREATE SEQUENCE public.notes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.notes_id_seq OWNER TO notes_user;

--
-- Name: notes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: notes_user
--

ALTER SEQUENCE public.notes_id_seq OWNED BY public.notes.id;


--
-- Name: tags; Type: TABLE; Schema: public; Owner: notes_user
--

CREATE TABLE public.tags (
    id integer NOT NULL,
    label text NOT NULL
);


ALTER TABLE public.tags OWNER TO notes_user;

--
-- Name: tags_id_seq; Type: SEQUENCE; Schema: public; Owner: notes_user
--

CREATE SEQUENCE public.tags_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.tags_id_seq OWNER TO notes_user;

--
-- Name: tags_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: notes_user
--

ALTER SEQUENCE public.tags_id_seq OWNED BY public.tags.id;


--
-- Name: notes id; Type: DEFAULT; Schema: public; Owner: notes_user
--

ALTER TABLE ONLY public.notes ALTER COLUMN id SET DEFAULT nextval('public.notes_id_seq'::regclass);


--
-- Name: tags id; Type: DEFAULT; Schema: public; Owner: notes_user
--

ALTER TABLE ONLY public.tags ALTER COLUMN id SET DEFAULT nextval('public.tags_id_seq'::regclass);


--
-- Data for Name: note_tags; Type: TABLE DATA; Schema: public; Owner: notes_user
--

COPY public.note_tags (note_id, tag_id) FROM stdin;
1	2
1	16
1	3
2	6
2	4
2	5
3	8
3	7
3	4
4	9
4	6
4	4
5	10
5	5
5	19
6	11
6	12
6	19
7	13
7	1
7	14
8	15
8	2
8	3
9	17
9	18
9	6
10	20
10	6
10	1
\.


--
-- Data for Name: notes; Type: TABLE DATA; Schema: public; Owner: notes_user
--

COPY public.notes (id, title, markdown) FROM stdin;
1	AI-Powered Chatbot	### Overview\nAn intelligent chatbot built using **NLP** and **Machine Learning** that can understand user queries and provide contextual answers.\nFeatures include intent recognition, sentiment analysis, and multilingual support.
2	Cloud-Based Expense Tracker	### Overview\nA secure web and mobile platform to track personal and business expenses in real time.\nHosted on the **cloud** with integration to banking APIs.
3	Blockchain Voting System	### Overview\nA decentralized and tamper-proof **voting platform** leveraging blockchain for transparent elections.\nEnsures data integrity, voter anonymity, and real-time results.
4	Smart Home IoT Dashboard	### Overview\nAn integrated platform for managing **IoT devices** at home including lights, thermostats, and security systems.\nSupports voice assistants and real-time monitoring.
5	AR-Based Interior Design App	### Overview\nA **mobile AR application** that allows users to visualize furniture and decor in their homes before making purchases.\nEnables room scanning and 3D object placement.
6	Multiplayer VR Game	### Overview\nA cross-platform **VR game** with immersive environments and multiplayer features.\nIncludes real-time leaderboards, quests, and in-game purchases.
7	Big Data Analytics Platform	### Overview\nA scalable platform to process and visualize **large datasets** in real time.\nProvides predictive analytics, dashboards, and automated reporting.
8	Computer Vision Traffic Monitoring	### Overview\nAn AI-powered system that uses **computer vision** to detect traffic density and violations.\nIncludes real-time alerting and data analytics for smart cities.
9	Robotics Warehouse Automation	### Overview\nA fleet of autonomous robots for warehouse logistics and inventory management.\nIntegrates with ERP systems for efficiency and scalability.
10	Embedded Health Monitoring System	### Overview\nAn **embedded device** for monitoring vital health parameters such as heart rate, SpO2, and blood pressure.\nSupports cloud sync and real-time doctor dashboards.
\.


--
-- Data for Name: tags; Type: TABLE DATA; Schema: public; Owner: notes_user
--

COPY public.tags (id, label) FROM stdin;
1	Data Science
2	Machine Learning
3	Artificial Intelligence
4	Web Development
5	Mobile Development
6	Cloud Computing
7	Cybersecurity
8	Blockchain
9	Internet of Things
10	Augmented Reality
11	Virtual Reality
12	Game Development
13	Big Data
14	DevOps
15	Computer Vision
16	Natural Language Processing
17	Robotics
18	Software Engineering
19	UI/UX Design
20	Embedded Systems
\.


--
-- Name: notes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: notes_user
--

SELECT pg_catalog.setval('public.notes_id_seq', 11, true);


--
-- Name: tags_id_seq; Type: SEQUENCE SET; Schema: public; Owner: notes_user
--

SELECT pg_catalog.setval('public.tags_id_seq', 20, true);


--
-- Name: note_tags note_tags_pkey; Type: CONSTRAINT; Schema: public; Owner: notes_user
--

ALTER TABLE ONLY public.note_tags
    ADD CONSTRAINT note_tags_pkey PRIMARY KEY (note_id, tag_id);


--
-- Name: notes notes_pkey; Type: CONSTRAINT; Schema: public; Owner: notes_user
--

ALTER TABLE ONLY public.notes
    ADD CONSTRAINT notes_pkey PRIMARY KEY (id);


--
-- Name: tags tags_label_key; Type: CONSTRAINT; Schema: public; Owner: notes_user
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_label_key UNIQUE (label);


--
-- Name: tags tags_pkey; Type: CONSTRAINT; Schema: public; Owner: notes_user
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_pkey PRIMARY KEY (id);


--
-- Name: note_tags note_tags_note_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: notes_user
--

ALTER TABLE ONLY public.note_tags
    ADD CONSTRAINT note_tags_note_id_fkey FOREIGN KEY (note_id) REFERENCES public.notes(id) ON DELETE CASCADE;


--
-- Name: note_tags note_tags_tag_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: notes_user
--

ALTER TABLE ONLY public.note_tags
    ADD CONSTRAINT note_tags_tag_id_fkey FOREIGN KEY (tag_id) REFERENCES public.tags(id) ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

\unrestrict lgQWe1P89KcSS0Av8lQ6EmE3jl6mYGdWsynKWPWOCsCLg5RWUmIM3mvspkUi78c

--
-- Database "postgres" dump
--

\connect postgres

--
-- PostgreSQL database dump
--

\restrict ceZW1MCeTyh24TAI4L7u7CBT3ZW9bpgmK3005fZh1BDbRTaLgxeucO3XgW3fiP9

-- Dumped from database version 17.6 (Debian 17.6-1.pgdg13+1)
-- Dumped by pg_dump version 17.6 (Debian 17.6-1.pgdg13+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- PostgreSQL database dump complete
--

\unrestrict ceZW1MCeTyh24TAI4L7u7CBT3ZW9bpgmK3005fZh1BDbRTaLgxeucO3XgW3fiP9

--
-- PostgreSQL database cluster dump complete
--

